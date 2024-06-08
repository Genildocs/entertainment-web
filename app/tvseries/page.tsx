import Category from '../components/Category';
import InputSearch from '../components/InputSearch';

export default function TvSeries() {
  return (
    <div>
      <InputSearch placeholder="Search for TV series" />
      <Category category="TV Series" />
    </div>
  );
}
