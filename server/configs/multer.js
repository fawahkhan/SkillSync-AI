import multer from 'multer'

//  create storage using this multer package

const storage = multer.diskStorage({});

const upload = multer({storage})

export default upload
