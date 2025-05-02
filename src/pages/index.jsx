import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import imrich from '../img/Imrich.jpg';

/*const Odkazy =() =>{
  return(
    <ul>
      <li><a href ="#">Drápek 1 </a></li>
      <li><a href ="#">Drápek 2 </a></li>
      <li><a href ="#">Drápek 3 </a></li>
      <li><a href ="#">Drápek 4 </a></li>
    </ul>
  );
}*/

const Plysaci = () => {
      const Silvestr = () =>{
        const plysakName = "Silvestr"
        const plysakImg = "https://kodim.cz/cms/assets/czechitas/js2/lekce/sablony-komponenty/cv-komponenty/plysaci/elephant.jpg"
        const plysakText = "Silvestr rád pozoruje dění za oknem a upřímně se usmívá na všechno kolemjdoucí."
      
      return (
        <div className="column">
          <img src={plysakImg}/>
          <h2>{plysakName}</h2>
          <p>{plysakText}</p>
        </div>
      )
      }

      const Ctirad = () =>{
        const plysakName = "Ctirad"
        const plysakImg = "https://kodim.cz/cms/assets/czechitas/js2/lekce/sablony-komponenty/cv-komponenty/plysaci/mouse.jpg"
        const plysakText = "Ctirad tráví svůj čas v blízkosti lednice a s očekáváním pozoruje její bílé dveře."
      
      return (
        <div className="column">
          <img src={plysakImg}/>
          <h2>{plysakName}</h2>
          <p>{plysakText}</p>
        </div>
      )
      }

      const Imrich = () =>{
        const plysakName = "Imrich"
        const plysakText = "Imrich je ježeček, který se rád mazlí a lozí po skalách. Je to dobrý společník, který tě nikdy nenechá ve štychu."
      
        return (
        <div className="column">
          <img src={imrich}/>
          <h2>{plysakName}</h2>
          <p>{plysakText}</p>
        </div>
      )
      }

    return (
      <div className = "flex-column">
        <Silvestr />
        <Ctirad />
        <Imrich />
      </div>
    )
}

const Footer = () => {
  return(
    <footer className='footer'>
      <p>Kočička Patička</p>
    </footer>
  );
}

document.querySelector('#root').innerHTML = render(
  <div className="container">
    <header>
      <div className="mainstage"></div>
      <h1>Plyšáci</h1>
    </header>

    <main>
      <Plysaci />
{/*       <div className = "flex-column">
        <div className='column'>
            <img className = "obr" src="https://kodim.cz/cms/assets/czechitas/js2/lekce/sablony-komponenty/cv-komponenty/plysaci/elephant.jpg"/>
            <h2 className='heading'>Silvestr</h2>
            <p className='text'>Silvestr rád pozoruje dění za oknem a upřímně se usmívá na všechno kolemjdoucí.</p>
        </div>
        <div className='column'>
          <img className = "obr" src="https://kodim.cz/cms/assets/czechitas/js2/lekce/sablony-komponenty/cv-komponenty/plysaci/mouse.jpg"/>
          <h2 className='heading'>Ctirad</h2>
          <p className='text'>tirad tráví svůj čas v blízkosti lednice a s očekáváním pozoruje její bílé dveře.</p>
        </div>
        <div className='column'>
          <img className = "obr" src="https://kodim.cz/cms/assets/czechitas/js2/lekce/sablony-komponenty/cv-komponenty/plysaci/mouse.jpg"/>
          <h2 className='heading'>Imrich</h2>
          <p className='text'>Imrich je ježek a Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate corrupti.</p>
        </div>
      </div> */}
    </main>
    <Footer />
  </div>
);
