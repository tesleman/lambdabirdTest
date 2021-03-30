import { NextApiRequestQuery } from 'next/dist/next-server/server/api-utils';
import dbConnect, { db } from '../core/db';
import Biatlons from './biatlonistScema';

export const cardProps = async (query: NextApiRequestQuery) => {
  dbConnect();

  try {
    if (db.readyState !== 1)
    //если нет подключения к бд нужно вернуть объект чтоб приложение не закрашилось
      return JSON.stringify([
        {
          _id: '',
          place: '',
          name: '',
          shooting: '',
          hits: '',
          rateoffire: '',
          time: '',
        },
      ]);
    const pageOptions = {
      sort: sortyng(query),
      text: query.q ? { $text: { $search: query.q } } : {},
    };

    let biatlons = await Biatlons.aggregate([
      { $match: pageOptions.text },
      { $sort: pageOptions.sort },
      {
        $project: {
          place: 1,
          name: 1,
          _id: 0,
          shooting: 1,
          hits: 1,
          rateoffire: 1,
          time: 1,
        },
      },
    ]);

    return JSON.stringify(biatlons);
  } catch (error) {
    throw error;
  }
};

const sortyng = (query: NextApiRequestQuery) => {
  if (query.name) return { name: +query.name };
  if (query.rateoffire) return { rateoffire: +query.rateoffire };
  if (query.hits) return { hits: +query.hits };
  if (query.place) return { place: +query.place };
  return { place: 1 };
};
