import { NextApiRequest, NextApiResponse } from "next";

export default function exit(req: NextApiRequest, res: NextApiResponse) {
    res.clearPreviewData();
    console.log(req.previewData)
    res.writeHead(307, {Location: '/'});
    res.end()
}