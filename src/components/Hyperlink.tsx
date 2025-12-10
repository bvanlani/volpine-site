export default function Hyperlink(props: {text:string, quote:boolean}){
    return(
        <a className={`flex h-10 px-4 rounded-md items-center justify-around transition duration-300 ease-in-out cursor-pointer ${props.quote ? 'bg-white hover:bg-white/80 text-black' : 'bg-white/10 hover:bg-white/20 text-white'} `}>
            {props.text}
        </a>
    )
}