import express from 'express';
import { getTrackingInfo } from '../controller/index.js';

/**
 * Validates if the tracking number is valid.
 * @param {string} tno - The tracking number.
 * @returns {boolean} - Returns true if valid, otherwise false.
 */
const isValidTNo = (tno) => {
  return tno && tno.length === 10 && /^[0-9]+$/.test(tno);
};

/**
 * Creates and returns a FedEx API router.
 * @param {object} axiosInstance - The Axios instance to use for API requests.
 * @returns {Router} - Returns an Express router.
 */
export const fedexAPI = (axiosInstance) => {
  const fedApi = express.Router();

  /**
   * GET /fedex/track
   * Fetches tracking information for a given tracking number.
   * Query Params:
   *  - trackingNumber: The tracking number to look up.
   * Response:
   *  - 200: Returns tracking information.
   *  - 400: Invalid tracking number.
   *  - 500: Internal Server Error.
   */

  /**
   * @swagger
   * /fedex/track:
   *   get:
   *     summary: Fetches tracking information for a given tracking number.
   *     tags: [Tracking]
   *     parameters:
   *       - in: query
   *         name: trackingNumber
   *         schema:
   *           type: string
   *         required: true
   *         description: The tracking number to look up.
   *     responses:
   *       200:
   *         description: Returns tracking information.
   *       400:
   *         description: Invalid tracking number.
   *       500:
   *         description: Internal Server Error.
   */
  fedApi.post('/track', async (req, res) => {
    const trackingNumber = req.body?.trackingNumber;
    console.log('In track ', trackingNumber);

    try {
      if (isValidTNo(trackingNumber)) {
        const resTrack = await getTrackingInfo(
          axiosInstance,
          trackingNumber
        ).catch((error) => {
          // Handle network errors
          res.status(500).send({ msg: 'Network Error', error: error.message });
        });

        if (resTrack) {
          console.log('Response from Fedex ', resTrack?.data);
          res.status(200).send({
            msg: 'Some response',
            ...{ ...resTrack?.data?.output?.completeTrackResults[0] },
          });
        }
      } else {
        console.log('Invalid tracking number');
        res.status(400).send({
          msg: 'Invalid tracking number',
        });
      }
    } catch (err) {
      console.log('Internal Server Error');
      res
        .status(500)
        .send({ msg: 'Internal Server Error', error: err.message });
    }
  });

  return fedApi;
};
