import Category from '../components/Category';
import InputSearch from '../components/InputSearch';

export default function Movies() {
  return (
    <div>
      <InputSearch placeholder="Search for movies" />
      <Category category="Movie" />
    </div>
  );
}
