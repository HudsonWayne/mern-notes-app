//GET HOME PAGE//

exports.homepage = async (req, res) => {
        const locals = {
            title: 'NodeJs Notes',
            discription: 'Free NodeJs Notes App'
        }
    res.render('index', locals);    
}

//GET ABOUT

exports.about = async (req, res) => {
    const locals = {
        title: 'About - NodeJs Notes',
        discription: 'Free NodeJs Notes App'
    }
res.render('about', locals);    
} 