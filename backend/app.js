const express = require('express');


const cors = require('cors');

const app = express();


app.use(cors());

app.get('/',(req,res,next)=>{
    res.send('OK');
});




app.get('/news',(_,res)=>{
    res.json(
        [
            {
                id: 1,
                slug: 'will-ai-replace-human',
                title: 'Will ai replace human ',
                image: 'Company-cuate.png',
                date: '22-2-2017',
                content: 'Since 103 fjjsd fnaeekalmdc acdamdkla cas hcnda la jkdcamdc adcska cnam da ma dhacj dad ca da,dajkdcacd ad a .'
            },
            {
                id: 2,
                slug: 'beavor-plague',
                title: 'A player of Bavers ',
                image: 'Company-pana.png',
                date: '13-4-2012',
                content: 'Since 103 fjjsd fnaeekalmdc acdamdkla cas hcnda la jkdcamdc adcska cnam da ma dhacj dad ca da,dajkdcacd ad a .'
            },
            {
                id: 4,
                slug: 'hiking',
                title: 'hiking is the best  ',
                image: 'Online world-rafiki.png',
                date: '13-4-2011',
                content: 'Since 103 fjjsd fnaeekalmdc acdamdkla cas hcnda la jkdcamdc adcska cnam da ma dhacj dad ca da,dajkdcacd ad a .'
            },
            {
                id: 5,
                slug: 'landspace ',
                title: 'The beaty of landspace  ',
                image: 'Team spirit-rafiki.png',
                date: '11-2-2009',
                content: 'Since 103 fjjsd fnaeekalmdc acdamdkla cas hcnda la jkdcamdc adcska cnam da ma dhacj dad ca da,dajkdcacd ad a .'
            },
        ]
    );
});


app.listen(5000);