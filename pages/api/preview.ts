import { NextApiRequest, NextApiResponse } from "next";

export default function preview(req: NextApiRequest, res: NextApiResponse) {
    res.setPreviewData({'test': 'preview'})
    console.log(req.previewData)
    res.writeHead(307, {Location: '/'})
    res.end()
}