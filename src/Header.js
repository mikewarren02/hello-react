import  React, {Component} from 'react'

class Header extends Component {
    render() {

        // const friends = this.props.friends.map((friends, index)=>{
        //     return <ul key={index}>{friends.name}</ul>
        // })

        return (
            <div className='header'>
                <h1>HighOnCoding</h1>
                <h2><b>Home</b></h2>
                <p>Categories</p>
                
                
                
            </div>
        )
    }
}



export default Header