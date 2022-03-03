package com.ramacciotti.devas.service.sections.social;

import com.ramacciotti.devas.model.Account;
import com.ramacciotti.devas.model.Social;
import com.ramacciotti.devas.vo.AccountVO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
@Slf4j
public class SocialCrudService implements SocialCrudInterface {

    @Override
    public AccountVO updateSocial(Optional<Account> account, AccountVO accountVO) {

        Social social = account.get().getSocial();
        Social socialVO = accountVO.getSocial();

        if(accountVO.getSocial() != null){

            if(socialVO.getLinkedin() != null){
                social.setLinkedin(socialVO.getLinkedin());
            }

            if(socialVO.getGithub() != null){
                social.setGithub(socialVO.getGithub());
            }

            if(socialVO.getSite() != null){
                log.info("SITE N ESTA NULO");
                social.setSite(socialVO.getSite());
            }

            social.setUpdatedAt(LocalDateTime.now());

        }

        return new AccountVO(account.get());

    }

}
