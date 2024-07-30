import GenarateImageApi from "./BaseApi";

const GenarateImageEndpoints = GenarateImageApi.injectEndpoints({
    endpoints: (builder) => ({
        AiGenarateImage: builder.query({
            query: (search: string) => ({
                url: `/image/normal/${search}`,
                method: "GET",
            })
        }),
        AiGenarateHorizontalImage: builder.query({
            query: (search: string) => ({
                url: `/image/horizontal/${search}`,
                method: "GET",
            })
        }),
        AiGenarateVerticalImage: builder.query({
            query: (search: string) => ({
                url: `/image/vertical/${search}`,
                method: "GET",
            })
        }),
        AiGenarateSquareImage: builder.query({
            query: (search: string) => ({
                url: `/image/square/${search}`,
                method: "GET",
            })
        }),
        AiGenaratePanoramicImage: builder.query({
            query: (search: string) => ({
                url: `/image/panoramic/${search}`,
                method: "GET",
            })
        }),
    })
});

export const { useLazyAiGenarateImageQuery, useLazyAiGenarateHorizontalImageQuery, useLazyAiGenarateSquareImageQuery, useLazyAiGenaratePanoramicImageQuery, useLazyAiGenarateVerticalImageQuery } = GenarateImageEndpoints;
