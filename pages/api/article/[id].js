import dbConnect from '../../../utils/dbConnect';
import Article from '../../../models/Article';

dbConnect();

export default async (req, res) => {
    const {
        query: { id },
        method
    } = req;

    switch (method) {
        case 'GET':
            try {
                const note = await Article.findById(id);

                if (!note) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: note });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
       
        
        default:
            res.status(400).json({ success: false })
            break;
    }
}