package br.univille.controller;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JOptionPane;
                                        // assinar o contrato 
public class ControllerPessoa implements ActionListener{

    //implementar o código para pode ouvir o evento
    @Override
    public void actionPerformed(ActionEvent e) {
        //casting
        if(((JButton)e.getSource()).getName().equals("btnSair")){
            System.exit(0);
        };
        JOptionPane.showMessageDialog(null,  "NO CREIO");
    }
    
}
