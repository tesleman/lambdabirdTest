import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import { NextRouter, useRouter } from 'next/router';

interface sortConstI {
  value: string;
  text: string;
}

const sortConst: Array<sortConstI> = [
  {
    value: 'name 1',
    text: 'name ⇑',
  },
  {
    value: 'name -1',
    text: 'name ⇓',
  },
  {
    value: 'hits 1',
    text: 'hits ⇑',
  },
  {
    value: 'hits -1',
    text: 'hits ⇓',
  },
  {
    value: 'rateoffire 1',
    text: 'rate of fire ⇑',
  },
  {
    value: 'rateoffire -1',
    text: 'rate of fire ⇓',
  },
  {
    value: 'place 1',
    text: 'place ⇑',
  },
  {
    value: 'place -1',
    text: 'place ⇓',
  },
];

const Filters = () => {
  const router = useRouter();
  const [qeryState, setQeryState] = React.useState('place 1');
  const [qeryTextState, setQeryTextState] = React.useState(
    router.query.q ? (router.query.q as string) : '',
  );

  const sorting = (value: string) => {
    if (!value) return;
    const filterByInut = sortConst.find((e: sortConstI) => e.value === value);
    const splitedValue = filterByInut.value.split(' ');
    return { [splitedValue[0]]: parseInt(splitedValue[1]) };
  };

  const textPageSearch = (value: string) => {
    if (!value) return;
    return { q: value };
  };
  const onTextHandleChang = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQeryTextState(event.target.value);
  };
  const onHandleChang = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setQeryState(event.target.value);
  };

  const setQeryFunctyon = () => {
    const sort = sorting(qeryState);

    const text = textPageSearch(qeryTextState);

    router.push(
      {
        pathname: '',
        query: {
          ...sort,
          ...text,
        },
      },
      undefined,
      { scroll: false },
    );
  };

  React.useEffect(() => {
    setQeryFunctyon();
  }, [qeryState, qeryTextState]);
  return (
    <Container>
      <Grid container direction="row">
        <Grid item xs={6}>
          <label htmlFor="search">
            search
            <input
              defaultValue={qeryTextState}
              onChange={onTextHandleChang}
              name="search"
              type="text"
            />
          </label>
        </Grid>
        <Grid item xs={6}>
          <select
            defaultValue={router.query[0] ? router.query[0] : qeryState}
            onChange={onHandleChang}
            name="price">
            {sortConst.map((element, index) => (
              <option key={index} value={element.value}>
                {element.text}
              </option>
            ))}
          </select>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Filters;
