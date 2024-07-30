import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BaseApi = createApi({
    reducerPath: 'ImageApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://freepik-to-image-api.vercel.app/api/v1',
        // baseUrl: "http://localhost:3000/api/v1"
    }),
    endpoints: () => ({})
});
export default BaseApi;