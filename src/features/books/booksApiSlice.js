import { apiSlice } from "../../app/api/apiSlice"

export const booksApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getBooks: builder.query({
            query: () => '/books',
            keepUnusedDataFor: 5,
        })
    })
})

export const {
    useGetBooksQuery
} = booksApiSlice 