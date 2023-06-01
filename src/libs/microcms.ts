import { createClient, MicroCMSQueries } from "microcms-js-sdk";

const client = createClient({
    serviceDomain : import.meta.env.SERVICE_DOMAIN,
    apiKey : import.meta.env.API_KEY,
});

export const getBlogs = async(queries: MictroCMSQueries) => {
    return await client.get({endpoint:"astro-blog" , queries });
};

export const getBlogDetail = async (BlogId:string, queries?: MictroCMSQueries) => {
    return await client.getListDetail({ endpoint:"astro-blog" , contentId:BlogId, queries });
};