import * as dotenv from 'dotenv';

dotenv.config();

export const environment = {
    END_POINT : process.env.END_POINT ? process.env.END_POINT : 'http://127.0.0.1:8000/api',
    MODE : process.env.MODE ? process.env.MODE : 'local',
    API_KEY: process.env.API_KEY ? process.env.API_KEY : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE2NjU4MjE2MjUsImV4cCI6MTY2NTgyNTIyNSwibmJmIjoxNjY1ODIxNjI1LCJqdGkiOiIzNTZHYTA0dFVpQkZRR2U2Iiwic3ViIjoiMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.NPI6sgnzPKgn7Df97cSJO17ksSbQGee4yAcmQp7V0as'
}