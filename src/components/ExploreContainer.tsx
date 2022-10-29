import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      {/*<strong>{name}</strong>*/}
      {/*<p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>*/}
      <p>Right now this is an empty page. Move to Photos tab to click, save and view photos.</p>
    </div>
  );
};

export default ExploreContainer;
