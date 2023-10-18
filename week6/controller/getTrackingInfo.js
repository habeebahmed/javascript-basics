export const getTrackingInfo = async (axiosInstance, trackingNumber) => {
  return axiosInstance.post(
    `${process.env.FEDEX_END_POINT}/track/v1/trackingnumbers`,
    {
      includeDetailedScans: true,
      trackingInfo: [
        {
          shipDateBegin: '2020-03-29',
          shipDateEnd: '2020-04-01',
          trackingNumberInfo: {
            trackingNumber: trackingNumber,
            carrierCode: 'FDXE',
            trackingNumberUniqueId: '245822~123456789012~FDEG',
          },
        },
      ],
    }
  );
};
