package com.ramacciotti.devas.service.sections.profile;

import com.ramacciotti.devas.model.Account;
import com.ramacciotti.devas.vo.AccountVO;
import com.ramacciotti.devas.model.Profile;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
@Slf4j
public class ProfileCrudService implements ProfileCrudInterface {

    @Override
    public AccountVO updateProfile(Optional<Account> account, AccountVO accountVO) {

        Profile profile = account.get().getProfile();
        Profile profileVO = accountVO.getProfile();

        if(accountVO.getProfile() != null){

            if(profileVO.getName() != null){
                profile.setName(profileVO.getName());
            }

            if(profileVO.getAge() != null){
                profile.setAge(profileVO.getAge());
            }

            if(profileVO.getCity() != null){
                profile.setCity(profile.getCity());
            }

            if(profileVO.getDescription() != null){
                profile.setDescription(profile.getDescription());
            }

            profile.setUpdatedAt(LocalDateTime.now());

        }

        return new AccountVO(account.get());

    }

}
