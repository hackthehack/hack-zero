/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getHacks = `query GetHacks($id: ID!) {
  getHacks(id: $id) {
    id
    name
    description
  }
}
`;
export const listHackss = `query ListHackss(
  $filter: ModelHacksFilterInput
  $limit: Int
  $nextToken: String
) {
  listHackss(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
    }
    nextToken
  }
}
`;
