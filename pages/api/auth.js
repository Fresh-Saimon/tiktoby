import axios from "axios";

export default async function handler(req, res) {
  const { code } = req.query;

  const payload = {
    grant_type: "authorization_code",
    client_id: process.env.CLIENT_ID,
    code,
    client_secret: process.env.CLIENT_SECRET,
    redirect_uri: "https://tiktoby.vercel.app/",
  };

  try {
    const { data } = await axios.post(
      "https://api.freshbooks.com/auth/oauth/token",
      payload
    );

    res.json({ data });
  } catch (error) {
    res.json({ code, error: error.message });
  }
}
