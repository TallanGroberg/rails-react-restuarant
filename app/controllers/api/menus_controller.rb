class Api::MenusController < ApplicationController
  def index
    render json: Menu.all
  end

    def create
      menu = Menu.new(menu_params)
      if menu.save
        render json: menu
      else
        render json: { errors: menu.errors }, status: :unprocessable_entity
      end
    end

  def update
    menu = Menu.find(params[:id])
    # if menu.update() #may have to update as complete or not depending on errors
      render json: menu
  end

  def destroy
    Menu.find(params[:id]).destroy
    render jason: { message: 'Menu item deleted'}
  end

  private
  
  def menu_params
    params.require(:menus).permit(:lunch, :dinner)

  end

end
