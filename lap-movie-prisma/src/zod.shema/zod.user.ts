import {z,TypeOf}from 'zod'

export const movietype=z.object({

    body:z.object({
        name:z.string(
            {required_error:"pleas write your movie name"})
            .min(2 ,"The name must be more then tow"),
        rating:z.number({required_error:"pleas write the rating"})
        .max(6 ,"The Rating must be between 1 and 5")
        .min(2 ,"The Rating must be between 1 and 5"),
        duration:z.number({required_error:"pleas write the duration"})
        .max(60 ,"The Duration must be 60 minutes"),
        gener:z.enum(["Drama", "Action", "Comedy"],{required_error:"pleas write the gener"})

        
       

    })
    
})



export type MoviesType = TypeOf<typeof movietype> ["body"];



// export const Registertype = z.object({
//     body: z.object({
//       username: z
//         .string({
//           required_error: "username is required",
//           invalid_type_error: "الرجاء كتابة  حروف",
//         })
//         .max(6, "يجب ان يكون الاسم اقل من 6 حروف")
//         .min(2, "يجب ان يكون الاسم اكثر من 2 حروف"),
//       password: z.string({
//         required_error: "password is required",
//         invalid_type_error: "الرجاء كتابة  حروف",
//       }),
//       email: z
//         .string({
//           required_error: "email is required",
//           invalid_type_error: "الرجاء كتابة  حروف",
//         })
//         .email(),
//     }),
//   });