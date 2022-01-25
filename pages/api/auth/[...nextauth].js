import NextAuth from 'next-auth'
import GitHub from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'

const options = {
 
    providers: [
        GitHub({
          clientId: process.env.GITHUB_ID,
          clientSecret: process.env.GITHUB_SECRET
        }),
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
       
      ],
      database: process.env.DB_URL,
      
      jwt :{
        secret: 'gdudkmdkflmfm',
      },
}

export default (req,res) => NextAuth(req,res,options)