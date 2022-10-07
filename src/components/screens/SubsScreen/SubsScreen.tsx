import React from "react"
import { FlatList, View } from "react-native"
import { useSelector } from "react-redux"
import { DefaultState } from "../../../store"
import { DataResponse } from "../../../api/types/app"
import UserCard from "../../common/UserCard/UserCard"
import NoContent from "../../common/NoContent/NoContent"
import { styles } from "./styles"

const SubsScreen: React.FunctionComponent = () => {
  const submissions = useSelector<DefaultState, DataResponse.Sumbmission[]>(state => state.app.submissions)

  return (
    <View style={styles.container}>
      {submissions.length ? (
        <FlatList
          numColumns={1}
          data={submissions}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.flatListStyle}
          renderItem={({ item, index }) => (
            <UserCard user={item} index={index + 1} />
          )}
        />
      ) : (
        <NoContent />
      )}
    </View>
  )
}

export default SubsScreen
