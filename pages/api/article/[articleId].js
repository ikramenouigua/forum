import dbConnect from '../../../utils/dbConnect';
import Article from '../../../models/Article';

dbConnect();

export default async (req, res) => {
    const {
        query: { articleId },
        method
    } = req;
    console.log(req)
    switch (method) {
        case 'GET':
            console.log(articleId)
            try {
                const article = await Article.findById(articleId);
                

                if (!note) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: article });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
       
       
        default:
            res.status(400).json({ success: false })
            break;
    }
}