import React from 'react'
import { Dropdown, DropdownItem, DropdownMenu, Image, MenuItem } from 'semantic-ui-react'

export default function SignedIn() {
  return (
    <div>
      <MenuItem>
      <Image avatar spaced ="right" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3G7YC5RKZSWUp9CNIL4Nyle-o3E-GLd-bRg&usqp=CAU"/>
      <Dropdown>
        <DropdownMenu>
            <DropdownItem text="Bilgilerim" icon="info"/>
            <DropdownItem text="Çıkış Yap" icon="sign-out"/>
        </DropdownMenu>
      </Dropdown>
      </MenuItem>
    </div>
  )
}
