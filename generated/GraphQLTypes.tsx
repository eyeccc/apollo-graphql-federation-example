// THIS IS A GENERATED FILE
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Auction = {
   __typename?: 'Auction',
  id: Scalars['ID'],
  name: Scalars['String'],
  photo: Photo,
  offers?: Maybe<Array<Maybe<Bid>>>,
  highestOffer?: Maybe<Bid>,
};

export type Bid = {
   __typename?: 'Bid',
  user: User,
  amount: Scalars['Int'],
};

export type Mutation = {
   __typename?: 'Mutation',
  updatePhotos?: Maybe<Photo>,
};


export type MutationUpdatePhotosArgs = {
  id: Scalars['String'],
  url: Scalars['String']
};

export type Pet = {
   __typename?: 'Pet',
  name: Scalars['String'],
  id: Scalars['ID'],
  species?: Maybe<Species>,
  breed: Scalars['String'],
  owner: User,
  photos: Array<Photo>,
};

export type Photo = {
   __typename?: 'Photo',
  id: Scalars['ID'],
  pet: Pet,
  url: Scalars['String'],
};

export type Query = {
   __typename?: 'Query',
  allAuctions: Array<Auction>,
  allPhotos: Array<Photo>,
};

export enum Species {
  Dog = 'Dog',
  Cat = 'Cat'
}

export type User = {
   __typename?: 'User',
  id: Scalars['ID'],
  favoritePhoto?: Maybe<Photo>,
  photoGallery?: Maybe<Array<Maybe<Photo>>>,
  username: Scalars['String'],
  auctionHistory?: Maybe<Array<Maybe<Auction>>>,
};
