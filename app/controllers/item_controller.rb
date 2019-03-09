class ItemController < ApplicationController

  def new
    @item = Item.new
  end

  def create
    @item = Item.create(name: params[:itemname], room_id: params[:roomId])
    render json: @item
  end

  def index
    @items = Item.all
    render json: @items
  end

  def delete
    @item = Item.find_by(id: params[:_json])
    @item.destroy
    @items = Items.all
    render json: @items
  end

end
