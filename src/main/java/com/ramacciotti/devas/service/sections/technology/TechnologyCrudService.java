package com.ramacciotti.devas.service.sections.technology;

import com.ramacciotti.devas.model.Account;
import com.ramacciotti.devas.model.Technology;
import com.ramacciotti.devas.vo.AccountVO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@Slf4j
public class TechnologyCrudService implements TechnologyCrudInterface {

    @Override
    public AccountVO updateTechnology(Optional<Account> account, AccountVO accountVO) {

        List<Technology> technology = account.get().getTechnologies();
        List<Technology> technologyVO = accountVO.getTechnologies();

        if(!accountVO.getTechnologies().isEmpty()){

            System.out.println("Test");

        }

        return new AccountVO(account.get());

    }

}
