import { useState, useEffect } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { getQuestionsData, question } from '../Questions/QuestionsSource';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Categories.css'; // Importe seus estilos personalizados aqui

const categories = [
  { value: "any", label: "Any Category", icon: "fa-home"  },
  { value: "9", label: "General Knowledge" , icon: "fa-home" },
  { value: "10", label: "Entertainment: Books" , icon: "fa-home" },
  { value: "11", label: "Entertainment: Film" , icon: "fa-home" },
  { value: "12", label: "Entertainment: Music" , icon: "fa-home" },
  { value: "13", label: "Entertainment: Musicals & Theatres" , icon: "fa-home" },
  { value: "14", label: "Entertainment: Television" , icon: "fa-home" },
  { value: "15", label: "Entertainment: Video Games" , icon: "fa-home" },
  { value: "16", label: "Entertainment: Board Games" , icon: "fa-home" },
  { value: "17", label: "Science & Nature" , icon: "fa-home" },
  { value: "18", label: "Science: Computers", icon: "fa-home"  },
  { value: "19", label: "Science: Mathematics", icon: "fa-home"  },
  { value: "20", label: "Mythology" , icon: "fa-home" },
  { value: "21", label: "Sports", icon: "fa-home"  },
  { value: "22", label: "Geography", icon: "fa-home"  },
  { value: "23", label: "History", icon: "fa-home"  },
  { value: "24", label: "Politics", icon: "fa-home"  },
  { value: "25", label: "Art" , icon: "fa-home" },
  { value: "26", label: "Celebrities" , icon: "fa-home" },
  { value: "27", label: "Animals", icon: "fa-home"  },
  { value: "28", label: "Vehicles" },
  { value: "29", label: "Entertainment: Comics" , icon: "fa-home" },
  { value: "30", label: "Science: Gadgets" , icon: "fa-home" },
  { value: "31", label: "Entertainment: Japanese Anime & Manga" , icon: "fa-home" },
  { value: "32", label: "Entertainment: Cartoon & Animations" , icon: "fa-home" }
];

function Categories() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [questions, setQuestions] = useState<question[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("any"); 
  const navigate = useNavigate();

  useEffect(() => {
    if (loaded) {
      navigate('/question', { state: { questions } }); 
    }
  }, [loaded, questions, selectedCategory, navigate]);

  const trigQuestions = () => {
    getQuestionsData(selectedCategory).then((data) => {
      setQuestions(data);
      setLoaded(true);
    });
  }

  const handleCategorySelect = (categoryValue: string) => {
    console.log(categoryValue);
    setSelectedCategory(categoryValue);
  }

  return (
    <div className="main-content">
      <nav className="navbar nav-user">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <FontAwesomeIcon icon={faArrowLeft} style={{ color: 'white' }} />
          </a>
          <h1 className="text-white mx-auto">CATEGORIAS</h1>
        </div>
      </nav>
      <div className="container-fluid">
        <div className='text-white'>
          <h2 className="text-center mb-5">Escolha uma categoria</h2>
        </div>
        <Carousel activeIndex={activeIndex} onSelect={setActiveIndex} interval={null} indicators={false}>
          <Carousel.Item>
            <div className="row category-row m-5">
              {categories.slice(0, 6).map((category, index) => (
                <div className={`col-6 category-item ${selectedCategory === category.value ? 'category-item-selected' : ''}`} key={index} onClick={() => handleCategorySelect(category.value)}>
                  <div className="category-item-content">
                    <FontAwesomeIcon icon={faArrowLeft} className="category-icon pt-3  mt-1 mb-3" />
                    <p>{category.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row category-row m-5">
              {categories.slice(6, 12).map((category, index) => (
                <div className={`col-6 category-item ${selectedCategory === category.value ? 'category-item-selected' : ''}`} key={index} onClick={() => handleCategorySelect(category.value)}>
                  <div className="category-item-content">
                    <FontAwesomeIcon icon={faArrowLeft} className="category-icon pt-3 mt-1 mb-3" />
                    <p>{category.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </Carousel.Item>
          
        </Carousel>
      </div>
      <div className="container-fluid d-flex justify-content-center align-items-center mt-5 mb-5">
        <Button
          style={{ backgroundColor: '#FF9A30', width: '30%' }}
          variant="primary"
          onClick={trigQuestions}
        >
          <h1>Continuar</h1>
        </Button>
      </div>
    </div>
  );
}

export default Categories;
