package com.ramacciotti.devas.service.sections.status;

import com.ramacciotti.devas.model.Account;
import com.ramacciotti.devas.model.Status;
import com.ramacciotti.devas.vo.AccountVO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
@Slf4j
public class StatusCrudService implements StatusCrudInterface {

    @Override
    public AccountVO updateStatus(Optional<Account> account, AccountVO accountVO) {

        Status status = account.get().getStatus();
        Status statusVO = accountVO.getStatus();

        if(accountVO.getStatus() != null){

            if(statusVO.isActive()){
                status.setActive(true);
            }

            if(!statusVO.isActive()){
                status.setActive(false);
            }

            status.setUpdatedAt(LocalDateTime.now());

        }

        return new AccountVO(account.get());

    }

}
