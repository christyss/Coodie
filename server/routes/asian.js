const express = require('express');
const router = express.Router();
const fs = require('fs')


const asianRecipe = './data/asian.json';

const readVideosFile = () => {
    const FileContent = fs.readFileSync(asianRecipe);
    const parsedFileContent = JSON.parse(FileContent)
    return parsedFileContent;
}

router.get('/', (req, res) => {
    try {
        const asian = readVideosFile();
        return res.status(200).json(asian);
    } catch (error) {
        return res.status(500).json({ error: 'The file cannot be read.' })
    }
});



module.exports = router;
