export default async function handler(req,res) {
switch (req.method) {
 case 'GET':
           await GET(req,res);
 break;
 case 'POST':
           await POST(req,res);
 break;

 default:
           res.status(200).json();
 break;
}
}
async function POST(req,res) {
 
}
async function GET(req,res) {
    res.status(200).json([
        "mauro","ivan","vanha","vanha","vanha","vanha","vanha",
    ])
}