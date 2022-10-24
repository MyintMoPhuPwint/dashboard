import * as dotenv from 'dotenv';

dotenv.config();

const endPoint = [
    'http://127.0.0.1:8000/api',
    'production'
]

const mode = [
    'local',
    'production'
]

export const environment = {
    END_POINT : `${endPoint[0]}`,
    MODE : `${mode[0]}`,
    API_KEY: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE2NjY1OTEyOTYsImV4cCI6MTY2NjU5NDg5NiwibmJmIjoxNjY2NTkxMjk2LCJqdGkiOiI1RzdCWnlEQ3FRY1I5OWlDIiwic3ViIjoiMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.sqRdawXCt5dzgbpYJwRINYhkT64Dz0bILBvWlHCY-z0'
}