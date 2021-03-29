import { model, Schema, Document, models, Model } from 'mongoose';

export interface BiatlonsScemaInterface extends Document {
  place: number;
  name: string;
  shooting: string;
  hits: number;
  rateoffire: string;
  time: string;
}

export interface BiatlonsModel extends Model<BiatlonsScemaInterface> {}
const BiatlonsScema = new Schema({
  place: {
    type: Number,
  },
  name: {
    type: String,
  },
  shooting: {
    type: String,
  },
  hits: {
    type: Number,
  },
  rateoffire: {
    type: String,
  },
  time: {
    type: String,
  },
});
BiatlonsScema.index({ name: 'text' });
const Biatlons: BiatlonsModel =
  models.Biatlons || model<BiatlonsScemaInterface>('Biatlons', BiatlonsScema);

export default Biatlons;
