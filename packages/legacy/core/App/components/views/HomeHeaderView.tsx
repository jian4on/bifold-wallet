import { useTheme } from '../../contexts/theme'
import { useTranslation } from 'react-i18next'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { NotificationReturnType } from '../../hooks/notifications'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
// import { testIdWithKey } from '../../utils/testable'

export interface HomeHeaderViewProps {
  notifications: NotificationReturnType
  showNotifications: boolean
  children?: any
}

const HomeHeaderView: React.FC<HomeHeaderViewProps> = ({ notifications, showNotifications, children }: HomeHeaderViewProps) => {
  const { t } = useTranslation()
  const { ColorPallet, TextTheme } = useTheme()

  const styles = StyleSheet.create({
    noNotificationContainer: {
      flex: 1,
      flexDirection: "row",
      alignContent: "space-between",
      paddingHorizontal: 20,
      paddingTop: 20,
      paddingBottom: 0,
      backgroundColor: ColorPallet.brand.secondaryBackground,
    }
  })
  return notifications?.length > 0 ? (
    <View style={styles.noNotificationContainer}>
      <Text style={[TextTheme.label, { fontSize: 20, marginBottom: 6, textAlign: 'left' }]}>
        {t('Home.Notifications')} ({notifications?.length})
      </Text>
      <Text style={{ position: 'absolute', right: 20, top: 20}}>
        <Icon name={showNotifications ? 'chevron-up' : 'chevron-down'} size={30} />
      </Text>
      {children}
    </View>
  ) : (
    <></>
  )
}

export default HomeHeaderView
