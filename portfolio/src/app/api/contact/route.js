import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

require("dotenv").config;

export async function POST(request) {
  const data = await request.json();
  try {
    const transporeter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      service: "gmail",

      auth: {
        user: "bibashcdry46@gmail.com",
        pass: "ndpxfevkdevjuabf",
      },
    });
    const info = await transporeter.sendMail({
      from: `${data.name}`,
      to: "bibashcdry46@gmail.com",
      subject: "Inquiry from Bibash portfolio",
      html: `
      <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #fff;
            border: 2px solid #48AEDD;
            border-radius: 10px;
        }
      
        p {
            font-size: 20px;
            line-height: 1.5;
            margin-bottom: 10px;
            border: 2px solid #48AEDD;
            border-radius: 50px 20px;
            background-color: #48AEDD;
            color: white;
            padding: 5px;
            text-align: center;
            font-weight: 900;
        }
        ul { 
            list-style-type: none;
            padding: 0;
        }
        li {
            margin-bottom: 5px;
        }
        .signature {
            font-style: italic;
            font-size: 14px;
        }
      </style>
</head>
<body>
    <div class="email-container">

        <p>My Portfolio</p>
        <ul>
            <li><strong>Name:</strong> ${data.name}</li>
            <li><strong>Email:</strong> ${data.email}</li>
            <li><strong>Phone:</strong> ${data.phoneNumber}</li>
            <li><strong>Subject:</strong> ${data.subject}</li>
            <li><strong>Message:</strong><br>${data.message}</li>
        </ul>
    </div>

</body>
</html>
      `
    })
    if(info.messageId){
        return NextResponse.json({error:false,message:"Message successfully sent! Thank you for contacting Bibash Chaudhary."})
    }
    return NextResponse.json({error:false,message:"Something went wrong!"})

  } catch (error) {
    console.error(error);
  }
}
