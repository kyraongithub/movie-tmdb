import { render } from '@testing-library/react';
import Card from '../../../../components/ui/Card';

describe('Card', () => {
  it('render Card component', () => {
    const movie = {
      adult: false,
      backdrop_path: '/eDBZN0TbWkxoAB0qIDFagVcPPTN.jpg',
      genre_ids: [27, 14, 35, 12],
      id: 1153714,
      original_language: 'en',
      original_title: 'Death of a Unicorn',
      overview:
        'A father and daughter accidentally hit and kill a unicorn while en route to a weekend retreat, where his billionaire boss seeks to exploit the creature’s miraculous curative properties.',
      popularity: 186.0114,
      poster_path: '/lXR32JepFwD1UHkplWqtBP1K79z.jpg',
      release_date: '2025-03-27',
      title: 'Death of a Unicorn',
      video: false,
      vote_average: 6.4,
      vote_count: 173,
    };

    const { container } = render(<Card movie={movie} id={0} />);
    expect(container).toMatchSnapshot();
  });
});
