import privateClient from "../clients/privateClient";

const favoriteEndpoints = {
  list: "user/favorites",
  add: "user/favorites",
  remove: ({ mediaId }) => `user/favorites/${mediaId}`,
};

const favoriteApi = {
  getList: async () => {
    try {
      const response = await privateClient.get(favoriteEndpoints.list);

      return { response };
    } catch (err) {
      return { err };
    }
  },

  add: async ({ mediaId, mediaType, mediaTitle, mediaPoster, mediaRate }) => {
    try {
      const response = await privateClient.post(favoriteEndpoints.add, {
        mediaId,
        mediaType,
        mediaTitle,
        mediaPoster,
        mediaRate,
      });

      return { response };
    } catch (err) {
      return { err };
    }
  },

  remove: async ({ mediaId }) => {
    try {
      const response = await privateClient.delete(
        favoriteEndpoints.remove({ mediaId })
      );

      return { response };
    } catch (err) {
      return { err };
    }
  },
};

export default favoriteApi;
