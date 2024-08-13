function Header(props) {
    return (
        <div>
            <h1 class="text-3xl font-bold underline"> {props.title} </h1>
            <p> {props.description} </p>
        </div>
    );
}  

export default Header;