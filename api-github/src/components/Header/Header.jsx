import logoGitHub from'../../assets/logoGit.svg'


export default function Header(){
    return(
        <header className="
        flex justify-between 
        flex-row 
        items-center
        bg-gray-700 
        text-white 
        p-10 
        font-mono">
            <img src={logoGitHub} alt="Logo Github"  className='w-20'/>
        </header>
    )
}