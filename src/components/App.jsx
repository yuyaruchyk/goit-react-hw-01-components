import React from "react";
import user from "components/Profile/user.json";
import { Profile } from "./Profile/Profile"
import data from "components/Statistics/data.json";
import { Statistics } from "./Statistics/Statistics"
import friends from "components/FriendList/friends.json";
import { FriendList } from "./FriendList/FriendList"
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";

import transactions from "components/TransactionHistory/transactions.json";
import 'modern-normalize';
import { Global } from '@emotion/react';
import { globalStyles } from './GlobalStyle';
import 'modern-normalize';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats"
        stats={data} />
      
      <FriendList friends={friends} />

     <TransactionHistory transactions={transactions} />

<Global styles={globalStyles} />


    </div>
  );
};





