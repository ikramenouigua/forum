import dbConnect from '../../../utils/dbConnect';
import Article from '../../../models/Article';

dbConnect();

export default async (req, res) => {
    const {
        query: { category },
        method
    } = req;

    switch (method) {
        case 'GET':
            try {
                const articles = await Article.find({category: category});

                res.status(200).json({ success: true, data: articles })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
       
        default:
            res.status(400).json({ success: false });
            break;
    }
}