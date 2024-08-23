// create your RTK Query endpoints here
import {creatApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const quotesApi = createApi({
    reducerPath: 'quotesAPi',
    endpoints: builder =>({
        getQuotes: builder.query({}),
        createQuote: builder.query({}),
        toggleQuote: builder.query({}),
        deleteQuote: builder.query({})
    })
})

export const {
    useGetQuotesQuery, useToggleFakeMutation, useCreateQuoteMutation, useDeleteQuoteMutation,
} = quotesApi