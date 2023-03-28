import './Ad.css';

interface Props {
    darkTheme?: boolean;
    fontSize: number;
    flavor: string;
}

const Ad = ({darkTheme, fontSize, flavor}: Props) => {
  return (
    <div className={`sample-dva ${darkTheme && 'dark'}`}>
                <p>Vote for</p>
                <p className='flavor' style={{ fontSize }}>{flavor}</p>
            </div>
  )
};

export default Ad;
