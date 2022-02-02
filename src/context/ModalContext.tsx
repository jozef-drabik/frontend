import { useState, createContext, SetStateAction, Dispatch } from 'react'
export interface valueType {
  setNotificationsOpen: Dispatch<SetStateAction<boolean>>
  setCarId: Dispatch<SetStateAction<string | null>>
  setOpen: Dispatch<SetStateAction<boolean>>
  notificationMessage: string
  setNotificationMessage: any
  notificationsOpen: boolean
  accordionExpanded: boolean
  confirmationOpen: boolean
  setAccordionExpanded: Dispatch<SetStateAction<boolean>>
  areCarsSelected: boolean
  setConfirmationOpen: Dispatch<SetStateAction<boolean>>
  setAreCarsSelected: Dispatch<SetStateAction<boolean>>
  carId: string | null
  drawerOpen: boolean
  setDrawerOpen: Dispatch<SetStateAction<boolean>>
  search: string
  setSearch: Dispatch<SetStateAction<string>>
  open: boolean
}
export const ModalContext = createContext<valueType | null>(null)
function ModalContextProvider({ children }: any) {
  const [notificationMessage, setNotificationMessage] = useState('')
  const [confirmationOpen, setConfirmationOpen] = useState(false)
  const [accordionExpanded, setAccordionExpanded] = useState(false)
  const [notificationsOpen, setNotificationsOpen] = useState(false)
  const [areCarsSelected, setAreCarsSelected] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [search, setSearch] = useState<string>('')
  const [carId, setCarId] = useState<string | null>(null)
  const [open, setOpen] = useState<boolean>(false)
  const dataValue: valueType = {
    setNotificationMessage,
    notificationMessage,
    setAccordionExpanded,
    setNotificationsOpen,
    accordionExpanded,
    areCarsSelected,
    setAreCarsSelected,
    confirmationOpen,
    notificationsOpen,
    setConfirmationOpen,
    setDrawerOpen,
    drawerOpen,
    setSearch,
    setCarId,
    setOpen,
    search,
    carId,
    open,
  }
  return <ModalContext.Provider value={dataValue}>{children}</ModalContext.Provider>
}
export default ModalContextProvider
