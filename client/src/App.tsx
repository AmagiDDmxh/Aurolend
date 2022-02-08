import { useState } from 'react'
import './App.css'

import OnePage from './components/One/one'
import TwoPage from './components/Two/two'

import ModalLock from './components/ModalLock/modallock'
import ModalWithdraw from './components/ModalWithdraw/modalwithdraw'

import ModalPDeposit from './components/ModalPDeposit/modalpdeposit'
import ModalPWithdraw from './components/ModalPWithdraw/modalpwithdraw'

import ModalMarketSupply from './components/ModalMarketSupply/modalmarketsupply'
import ModalMarketBorrow from './components/ModalMarketBorrow/modalmarketborrow'
import ModalMarketWithdraw from './components/ModalMarketWithdraw/modalmarketwithdraw'
import ModalMarketRepay from './components/ModalMarketRepay/modalmarketrepay'

import Logo from './assets/Logo.png'

import { Modal, Tabs, Image } from 'antd'

//CToken合约
import { HeaderActions } from 'components/HeaderActions'

const { TabPane } = Tabs

export const App = () => {
  const [state, setState] = useState({
    loading: false,
    storageValue: 0,
    accounts: null,
    contract: null,
    showmodalc: false,
    showmodalp: false,
    showmodalmarket: false,
  })

  const handleCancel = () => {
    setState((s) => ({ ...s, showmodalc: false }))
  }

  const handleCancelP = () => {
    setState((s) => ({ ...s, showmodalp: false }))
  }

  const handleCancelMarket = () => {
    setState((s) => ({ ...s, showmodalmarket: false }))
  }

  const showModalC = () => {
    setState((s) => ({ ...s, showmodalc: true }))
    console.log(state.showmodalc)
  }

  const showModalP = () => {
    setState((s) => ({ ...s, showmodalp: true }))
  }

  const showModalMarket = () => {
    setState((s) => ({ ...s, showmodalmarket: true }))
  }

  const OperationsSlot = {
    left: <Image preview={false} className="lc" src={Logo} />,
    right: <HeaderActions />,
  }

  // Contract usage example
  // const [{ data }] = useAccount()
  // const cTokenContarct = useCTokenContract()
  // useEffect(() => {
  //   if (!data?.address) {
  //     return
  //   }

  //   ;(async () => {
  //     console.log('contract')
  //     console.log(cTokenContarct)
  //     console.log(await cTokenContarct.balanceOf(data.address))
  //   })()
  // }, [data])

  return (
    <div>
      <div className="App">
        <Tabs className="tabs" defaultActiveKey="1" tabBarExtraContent={OperationsSlot}>
          <TabPane className="tabs_c" tab="流动性" key="1">
            <OnePage SetShowModalC={showModalC} SetShowModalP={showModalP} />
          </TabPane>
          <TabPane className="tabs_c" tab="借贷+稳定币" key="2">
            <TwoPage SetShowModalMarket={showModalMarket} />
          </TabPane>
        </Tabs>
      </div>

      {/* Lock Modal */}
      <Modal className="modal_c" visible={state.showmodalc} title="Lock And Vote" onCancel={handleCancel} footer={[]}>
        <div>
          <Tabs className="modalctabnav" defaultActiveKey="1" centered>
            <TabPane tab="LOCK" key="1">
              <ModalLock />
            </TabPane>
            <TabPane tab="WITHDRAW" key="2">
              <ModalWithdraw />
            </TabPane>
          </Tabs>
        </div>
      </Modal>

      {/* Provide Modal */}
      <Modal
        className="modal_p"
        visible={state.showmodalp}
        title="Provide Liquidity"
        onCancel={handleCancelP}
        footer={[]}
      >
        <div>
          <Tabs className="modalptabnav" defaultActiveKey="1" centered>
            <TabPane tab="DEPOSIT" key="1">
              <ModalPDeposit />
            </TabPane>
            <TabPane tab="WITHDRAW" key="2">
              <ModalPWithdraw />
            </TabPane>
          </Tabs>
        </div>
      </Modal>

      {/* Lock Modal Market*/}
      <Modal
        className="modal_market"
        visible={state.showmodalmarket}
        title=""
        onCancel={handleCancelMarket}
        footer={[]}
      >
        <div>
          <Tabs className="modalmarkettabnav" defaultActiveKey="1" centered>
            <TabPane tab="SUPPLY" key="1">
              <ModalMarketSupply />
            </TabPane>
            <TabPane tab="BORROW" key="2">
              <ModalMarketBorrow />
            </TabPane>
            <TabPane tab="WITHDRAW" key="3">
              <ModalMarketWithdraw />
            </TabPane>
            <TabPane tab="REPAY" key="4">
              <ModalMarketRepay />
            </TabPane>
          </Tabs>
        </div>
      </Modal>
    </div>
  )
}

export default App
