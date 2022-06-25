import {Link} from "react-router-dom"


function PageButton() {
    return <Link to="/products" class="nav-link">
        <button class="btn btn-secondery" style={{border: 'solid 5px', borderRadius: '20px'}} > 
            <span style={{"font-size": "24px", color: 'white'}}>
                Get Started
            </span>
        </button>
    </Link>
}

function FrameMessage() {
    const style = {
        margin: "auto",
        padding: "10% 35% 10% 15%",
        color: "white"
    }
    return <div style={style}>
        
        <div style={{"font-size": "96px"}}>
            Hello World!!
        </div>
        
        <div style={{"font-size": "36px"}}>
            This is the landing page and here's some content.
            How much wood would a woodchuck chuck if a 
            woodchuck would chuck wood?
        </div>
        <br />
        <PageButton />
    </div>
}

function Frame() {
    const style = {
        "background-image": `url("images/placeholder.jpg")`,
        "background-repeat": "no-repeat",
        "background-size": "cover",
        position: "absolute",
        height: "100%",
        width: "100%"
    }
    return <div style={style}>
        <FrameMessage />
    </div>
}

export default function HomePage() {
    return <div>
        <Frame />
    </div>
}